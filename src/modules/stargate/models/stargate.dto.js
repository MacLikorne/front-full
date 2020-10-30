export class StargateDto {
    constructor(stargateDto = { gate: "", ticket: "" }) {
        this.gate = stargateDto.gate
        this.ticket = stargateDto.ticket
    }
}