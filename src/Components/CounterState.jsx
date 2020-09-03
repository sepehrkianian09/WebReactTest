import React, {Component} from 'react';

class CounterState {
    constructor(tags, value) {
        this.tags = tags;
        this.value = value;
    }

    tags = [];
    value = 0;

    addTag(tag) {
        (this.tags)[this.tags.length] = tag;
        return this;
    }

    delTag(tagIndex) {
        this.tags = this.tags.filter((value, index) => index !== tagIndex)
        return this;
    }

    incrementValue() {
        this.value += 1;
        return this;
    }

    decreaseValue() {
        if (this.value !== 0) {
            this.value -= 1;
        }
        return this;
    }
}

export default CounterState;
