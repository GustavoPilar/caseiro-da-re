import { Cake } from "@app/model/cake";

export class CakeClassicUtls {
    static getClassics(): Cake[] {
        return [
            {
                Description: 'Bolo de Fubá',
                Frosting: 'Nenhuma',
                Price: 15.90,
                Category: 'Tradicional',
                ImageUrl: '/assets/img/cornmeal_cake.jpg',
            },
            {
                Description: 'Bolo de Banana',
                Frosting: 'Nenhuma',
                Price: 18.90,
                Category: 'Tradicional',
                ImageUrl: 'assets/img/cornmeal_cake.jpg',
            }
        ]
    }
}