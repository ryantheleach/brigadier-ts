import { 
    CommandNode,
    StringReader,
    CommandContextBuilder,
    CommandContext,
    Suggestions,
    SuggestionsBuilder
} from '../internal';

export class RootCommandNode<S> extends CommandNode<S> {

    constructor() {
        super(null, c => null, null, c => null, false);
    }

    parse(reader: StringReader, contextBuilder: CommandContextBuilder<S>): void {
    }

    getName(): string {
        return "";
    }

    getUsageText(): string {
        return "";
    }

    listSuggestions(context: CommandContext<S>, builder: SuggestionsBuilder): Promise<Suggestions> {
        return Suggestions.empty();
    }
}
