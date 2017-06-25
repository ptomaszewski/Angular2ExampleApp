import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'orderBy' })
export class OrderByPipe implements PipeTransform {
    inputOrdered: string[] = [];

    transform(input: any, sortingColumnName: string): any {
        let changeOrder = 1;
        if (sortingColumnName.slice(0, 1) === '-') {
            sortingColumnName = sortingColumnName.slice(1, sortingColumnName.length);
            changeOrder = -1;
        }

        function compare(a, b) {
            let genreA;
            let genreB;
            if (isFinite(a[sortingColumnName]) && isFinite(b[sortingColumnName])) {
                genreA = parseInt(a[sortingColumnName]);
                genreB = parseInt(b[sortingColumnName]);
            } else {
                genreA = a[sortingColumnName].toUpperCase();
                genreB = b[sortingColumnName].toUpperCase();
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