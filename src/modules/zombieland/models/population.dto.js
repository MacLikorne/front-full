export class PopulationDto {
    constructor(popDto = { infectedRation: 0, size: 1, pop: [[[false]]] }) {
        this.infectedRatio = popDto.infectedRatio
        this.size = popDto.size
        this.pop = popDto.pop
    }
}