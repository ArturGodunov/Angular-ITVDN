var todoModel = (function () {

    var _data = [];

    function _addItem(name, duedate, description, completed) {
        _data.push({
            name: name,
            duedate: duedate,
            description: description,
            completed: completed
        });
    }

    function _read() {
        var temp = window.localStorage["tasks"];

        if (!temp) _data = [];
        else _data = JSON.parse(temp);

        return _data;
    }

    return {
        data: _data,
        addItem: _addItem,
        updateItem: _updateItem,
        removeItem: _removeItem,
        save: _save,
        read: _read
    };

})();