import {
    CommandDispatcher,
    IntegerArgumentType,
    literal,
    argument
} from '../src/internal';
import 'mocha';
import {assert} from 'chai';


class CommandSource {
    private a: number;
    constructor(a: number) {
        this.a = a;
    }
    getA(): number {
        return this.a;
    }
}

const dispatcher = new CommandDispatcher<CommandSource>();
dispatcher.register(
    literal('random')
        .executes(c => 4)
);

describe('Readme Example 1', function() {

    it('should return 4', function() {
        const result = dispatcher.execute("random", null);
        //chosen by fair dice roll.
        assert(result === 4, 'Reality Broken');
    })

    it('should fail', function() {
        const result = dispatcher.execute("random", null);
        assert.throws(function() {
            if(result === 4) throw 'Reality Check Failed, is Dreaming';
        }, 'is Dreaming');
    })
    
});