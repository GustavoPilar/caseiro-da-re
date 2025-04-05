import { FrostingUtils } from './frostingUtils';
import { Cake } from "@app/model/cake";

export class CakeClassicUtls {

    private static frostingUtils = FrostingUtils

    static getClassics(): Cake[] {
        return [
            {
                Description: 'Bolo de Fubá',
                Frosting: this.frostingUtils.getNoOneFrosting(),
                Price: 15.90,
                Category: 'Tradicional',
                ImageUrl: 'assets/img/cornmeal_cake.jpg',
            },
            {
                Description: 'Bolo de Banana',
                Frosting: this.frostingUtils.getNoOneFrosting(),
                Price: 18.90,
                Category: 'Tradicional',
                ImageUrl: 'assets/img/banana_cake.jpg'
            },
            {
                Description: 'Bolo de Chocolate',
                Frosting: this.frostingUtils.getAllFrostingClassic(),
                Price: 18.90,
                Category: 'Tradicional',
                ImageUrl: 'assets/img/banana_cake.jpg',
            },
            {
                Description: 'Bolo Mesclado',
                Frosting: this.frostingUtils.getAllFrostingClassic(),
                Price: 18.90,
                Category: 'Tradicional',
                ImageUrl: 'assets/img/banana_cake.jpg',
            },
            {
                Description: 'Bolo de Cenoura',
                Frosting: this.frostingUtils.getFrostingClassicWithoutFrosting(['leite']),
                Price: 18.90,
                Category: 'Tradicional',
                ImageUrl: 'assets/img/banana_cake.jpg',
            },
            {
                Description: 'Bolo Formigueiro',
                Frosting: this.frostingUtils.getAllFrostingClassic(),
                Price: 18.90,
                Category: 'Tradicional',
                ImageUrl: 'assets/img/banana_cake.jpg',
            },
            {
                Description: 'Bolo de Milho',
                Frosting: this.frostingUtils.getNoOneFrosting(),
                Price: 18.90,
                Category: 'Tradicional',
                ImageUrl: 'assets/img/banana_cake.jpg',
            },
            {
                Description: 'Bolo Laranja',
                Frosting: this.frostingUtils.getNoOneFrosting(),
                Price: 18.90,
                Category: 'Tradicional',
                ImageUrl: 'assets/img/banana_cake.jpg',
            },
        ]
    }
}