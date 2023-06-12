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
        return pins.map(pins.analogReadPin(p), 0, 1023, 0, 100);
    }
    /**
    PH SENSOR, from boson kit extension
    */
    //% block="value of PH sensor at pin %pin"
    export function PHsensor(pin: AnalogPin): number {

        let map: number = 1024;
        let aref: number = 3300;
        let _neutralVoltage: number = 1500.0;
        let _acidVoltage: number = 2032.44;
        let voltage: number = pins.analogReadPin(pin) / map * aref;
        let slope: number = (7.0 - 4.0) / ((_neutralVoltage - 1500.0) / 3.0 - (_acidVoltage - 1500.0) / 3.0);
        let intercept: number = 7.0 - slope * (_neutralVoltage - 1500.0) / 3.0;
        let _phValue: number = Math.round(slope * (voltage - 1500.0) / 3.0 + intercept);
        return _phValue;
    }
    /**
    Returns the value of the temperature sensor in celsius.
    */
    //% block="value of temperature sensor at pin %p"
    export function TempSensor(p: AnalogPin): number {
        //return Math.round(pins.map(pins.analogReadPin(p), 0, 1023, 0, 110));
        return ~~(Math.round((100 * pins.analogReadPin(p) * (3.3 / 10.24)) * 3.3 / 10.24) / 100);
    }
    /**
    Returns the value of the waterproof temperature sensor in celsius.
    */
    //% block="value of waterproof temperature sensor at pin %p"
    export function WaterproofTempSensor(p: AnalogPin): number {
        //return Math.round(pins.map(pins.analogReadPin(p), 800, 115, 0, 80));
        let value: number = pins.analogReadPin(p);
        let n_Vref: number = 3.3;
        let n_Voltage_Value: number = ((value / 1024.0) * n_Vref);
        let n_Rt: number = ((n_Voltage_Value * 10.0) / (n_Vref - n_Voltage_Value));
        if (((0.593 > n_Rt) || (n_Rt > 331.498))) {
            return -1;
        }
        else {
            return ~~(Math.round(((1177692.5 / (3950 + (298.15 * (Math.log((n_Rt / 10.0)))))) - 270.35) * 100) / 100);
        }
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