function test() {
    console.log('Hello there!')
}

function init() {
    document.addEventListener('DOMContentLoaded', test, false)
}

export { init }
