'use client'

export default function componentDidMount(theme: any) {
    let mode = theme === 'dark' ? 'white' : '#131316'
    if (typeof document.body !== "undefined") {
        document.body.style.backgroundColor = mode
    }
}