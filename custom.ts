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
    Returns the value of the moisture sensor on a scale of 0 to 100.
    */
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
    //% blockId="error" block="test"
    //% draggableParameters="reporter" weight=0
    export function pinLow(analogReadPin: () => void) {
        if(analogReadPin){

        }           
    }
}