import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'orderBy' })
export class OrderByPipe implements PipeTransform {
    inputOrdered: string[] = [];

    transform(input: any, config: string): any {
        let changeOrder = 1;
        if (config.slice(0, 1) === '-') {
            config = config.slice(1, config.length);
            changeOrder = -1;
        }

        function compare(a, b) {
            let genreA;
            let genreB;
            if (isFinite(a[config]) && isFinite(b[config])) {
                genreA = parseInt(a[config]);
                genreB = parseInt(b[config]);
            } else {
                genreA = a[config].toUpperCase();
                genreB = b[config].toUpperCase();
            }

            let comparison = 0;
            if (genreA > genreB) {
                comparison = 1 * changeOrder;
            } else if (genreA < genreB) {
                comparison = -1 * changeOrder;
            }
            return comparison;
        }

        input.sort(compare);

        return input;
    }
}