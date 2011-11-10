yate.AST.template = {};

yate.AST.template.action = function() {
    this.Tid = this.state.tid++;
};

yate.AST.template.prepare = function() {
    var body = this.Body;
    var block = body.Block;

    /*
    if (body.AsList) {
        block.cast();
    } else {
    }
    */

    block.cast();
};

yate.AST.template._getType = function() {
    var type = this.Body.type();
    if (type == 'array' || type == 'object') {
        return type;
    }
    return 'xml';
};

