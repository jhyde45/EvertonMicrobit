//% color="#2FC100" weight=150
namespace  EPSS{
    //% block
    export function ListReader(tomato: number[]) {
        let pointer = 0
        while (true) {
            basic.showNumber(tomato[pointer])
            while (true) {
                if (input.buttonIsPressed(Button.A) && pointer > 0) {
                    pointer += -1
                 break;
                }
                if (input.buttonIsPressed(Button.B) && pointer < tomato.length - 1) {
                    pointer += 1
                    break;
                }
            }   
        }
    }
    /**
    Returns the value of the moisture sensor on a scale of 0 to 100.
    */
    //% block="value of moisture sensor at pin %p"
    export function MoistureSensor(p: AnalogPin): number {
        return pins.map(pins.analogReadPin(p), 0, 900, 0, 100);
    }
    /**
    Returns the value of the temperature sensor in celsius.
    */
    //% block="value of temperature sensor at pin %p"
    export function TempSensor(p: AnalogPin): number {
        return Math.round(pins.map(pins.analogReadPin(p), 0, 1023, 0, 110));
    }
    /**
    Returns the value of the waterproof temperature sensor in celsius.
    */
    //% block="value of waterproof temperature sensor at pin %p"
    export function WaterproofTempSensor(p: AnalogPin): number {
        return Math.round(pins.map(pins.analogReadPin(p), 760, 110, 0, 80));
    }
    /**
    converts input to binary and returns a boolean array
    */
    //% block
    export function ConvertToBinary(work: number):boolean[] {
        let out: boolean[] = [];
        for (let index = 0; index <= 29; index++) {
            if (work % 2 == 1) {
                work += -1
                out.push(true);
            }
            else{
                out.push(false);
            }
            work = work / 2
        }
        return out;
    }

}