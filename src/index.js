class Sorter {
    constructor() {
        // your implementation
        this.elements = [];
        this.sortFunction = function compareFunction(a, b) {
            return a - b;
        }
    }

    add(element) {
        // your implementation

        this.elements.push(element);




    }

    at(index) {
        // your implementation
        return this.elements[index];
    }

    get length() {
        // your implementation
        return this.elements.length;
    }

    toArray() {
        // your implementation
        return this.elements;
    }

    sort(indices) {
        // your implementation
        let that = this;
        let sortElements = [];
        console.log('indices', indices);
        indices.forEach(function (item) {
            sortElements.push(that.elements[item]);
        });
        sortElements.sort(this.sortFunction);

        let counter = parseInt(indices[0]);
        for (let i = 0; i < sortElements.length; i++) {
            that.elements[counter] = sortElements[i];
            counter++
        }

        indices.forEach(function (item, index) {

        });

    }

    setComparator(compareFunction) {
        // your implementation
        if (compareFunction) {
            this.sortFunction = compareFunction;
        } else {
            this.sortFunction = function sortFunction(a, b) {
                return a - b;
            };
        }

    }
}

module.exports = Sorter;