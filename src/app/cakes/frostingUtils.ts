import { Frosting } from "@app/model/frosting";

export class FrostingUtils {

    public static default: Frosting = { Description: 'Nenhuma Cobertura'}

    static getNoOneFrosting(): Frosting[] {
        return [this.default];
    }

    static getAllFrostingClassic(): Frosting[] {
        return [
            this.default,
            { Description: 'Leite condensado'},
            { Description: 'Creme de Leite'},
            { Description: 'Leite'},
            { Description: ' Margarina'},
            { Description: ' Chocolate em pó (50% cacau)'}
        ];
    }

    static getFrostingClassicWithoutFrosting(names: string[]): Frosting[] {

        let frostings: Frosting[] = this.getAllFrostingClassic();

        names.forEach((element) => {
            let index = frostings.findIndex(f => f.Description == element);
            frostings.splice(index, 1);
        })

        return frostings;
    }
}