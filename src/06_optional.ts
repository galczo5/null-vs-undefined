class Optional<T> {
    get(): T { }
    isPresent(): boolean { }
    ifPresent(consumer: (value: T) => void): void { }
    orElse(another: T): T { }
    orElseThrow<U>(exception: () => U): T { }
    static of(value: T): Optional<T> { }
    static empty(): Optional<T> { }
}
