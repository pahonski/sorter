class Sorter {
    constructor() {
        // your implementation
        this.elements = [];
        this.sortFunction = function compareFunction(a, b) {
            return a - b;
        };
    }

    add(element) {
        this.elements.push(element);
    }

    at(index) {
        return this.elements[index];
    }

    get length() {
        return this.elements.length;
    }

    toArray() {
        return this.elements;
    }

    sort(indices) {
        indices.sort();
        let _this = this;

        let selectedElements = indices
            .map(function(el) {
                return _this.elements[el];
            });
        selectedElements = selectedElements.filter(function(el) {
            return el !== undefined;
        });

        let sortedElements = selectedElements.sort(this.sortFunction);

        indices.map(function(el, index) {
            _this.elements[el] = sortedElements[index];
        });
    }

    setComparator(compareFunction) {
        this.sortFunction = compareFunction;
    }
}

module.exports = Sorter;