let pointer = 0
function readList () {
    pointer = 0
    while (true) {
        let list: number[] = []
        basic.showNumber(list[pointer])
        while (true) {
            if (input.buttonIsPressed(Button.A) && pointer > 0) {
                pointer += -1
                break;
            }
            if (input.buttonIsPressed(Button.B) && pointer < list.length - 1) {
                pointer += 1
                break;
            }
        }
    }
}
