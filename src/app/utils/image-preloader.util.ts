import { Observable, Observer } from "rxjs";

export function preloadImages(list: any[], imageProp: string): Observable<number> {
    return Observable.create((observer: Observer<number>) => {
        const newImages: any[] = [];
        var loadedImages = 0;

        const onImageLoaded = () => {
            loadedImages++;
            observer.next(loadedImages);
        };

        if(list.length === 0) {
            return observer.next(0);
        }

        list.forEach((item, index) => {
            newImages[index] = new Image();
            newImages[index].onload = () => {
                onImageLoaded();
            };
            // newImages[index].onerror = () => {
            //     onImageLoaded();
            // }
            newImages[index].src = item[imageProp]; 
        });

    });
}
