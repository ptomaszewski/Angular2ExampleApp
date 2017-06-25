import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'filterKeywords' })
export class FilterKeywordsPipe implements PipeTransform {
    inputOrdered: string[] = [];

    transform(input: any, keyword: string): any {
        function checkKeywords (item) {
            return (item.body.indexOf(keyword) !== -1 || item.title.indexOf(keyword) !== -1)
        }

        let hasKeyword = typeof keyword !== typeof undefined && keyword.length > 0;
        if (hasKeyword) {
            input = input.filter(checkKeywords);
        }
        
        return input;
    }
}
