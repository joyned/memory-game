import { MemoryItem } from '../model/MemoryItem';

export class MemoryItemUtil {

    public build() {
        let memoryItens: MemoryItem[] = [];

        memoryItens = [
            {
                id: 0,
                name: 'Teste 1',
                img: './assets/img/banana.jpg',
                value: 'banana',
                selected: true,
                disabled: false
            },
            {
                id: 1,
                name: 'Teste 1',
                img: './assets/img/maca.png',
                value: 'maca',
                selected: true,
                disabled: false
            },
            {
                id: 2,
                name: 'Teste 1',
                img: './assets/img/melancia.jpg',
                value: 'melancia',
                selected: true,
                disabled: false
            },
            {
                id: 3,
                name: 'Teste 1',
                img: './assets/img/uva.jpg',
                value: 'uva',
                selected: true,
                disabled: false
            },
            {
                id: 4,
                name: 'Teste 1',
                img: './assets/img/maca.png',
                value: 'maca',
                selected: true,
                disabled: false
            },
            {
                id: 5,
                name: 'Teste 1',
                img: './assets/img/pera.jpg',
                value: 'pera',
                selected: true,
                disabled: false
            },
            {
                id: 6,
                name: 'Teste 1',
                img: './assets/img/laranja.jpg',
                value: 'laranja',
                selected: true,
                disabled: false
            },
            {
                id: 7,
                name: 'Teste 1',
                img: './assets/img/uva.jpg',
                value: 'uva',
                selected: true,
                disabled: false
            },
            {
                id: 8,
                name: 'Teste 1',
                img: './assets/img/melancia.jpg',
                value: 'melancia',
                selected: true,
                disabled: false
            },
            {
                id: 9,
                name: 'Teste 1',
                img: './assets/img/pera.jpg',
                value: 'pera',
                selected: true,
                disabled: false
            },
            {
                id: 10,
                name: 'Teste 1',
                img: './assets/img/laranja.jpg',
                value: 'laranja',
                selected: true,
                disabled: false
            },
            {
                id: 11,
                name: 'Teste 1',
                img: './assets/img/banana.jpg',
                value: 'banana',
                selected: true,
                disabled: false
            }
        ]

        return memoryItens;
    }

    shuffle(array) {
        var currentIndex = array.length, temporaryValue: any, randomIndex: number;

        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }
}