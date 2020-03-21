var shift = false;

function testClick() {
    if (!this.shift) {
        document.getElementById('testSwapOne').style.color = 'blue';
        document.getElementById('testSwapTwo').style.color = 'green';
        this.shift = true;
    } else {
        document.getElementById('testSwapOne').style.color = 'green';
        document.getElementById('testSwapTwo').style.color = 'blue';
        this.shift = false;
    }
}