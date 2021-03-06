// Type definitions for CodeMirror
// Project: https://github.com/codemirror/CodeMirror
// Definitions by: ficristo <https://github.com/ficristo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// See docs https://codemirror.net/doc/manual.html#addon_match-highlighter

import * as CodeMirror from "codemirror";

declare module "codemirror" {
    interface HighlightSelectionMatches {
        /**
         * Minimum amount of selected characters that triggers a highlight (default 2).
         */
        minChars?: number;

        /**
         * The style to be used to highlight the matches (default "matchhighlight", which will correspond to CSS class cm-matchhighlight).
         */
        style?: string;

        /**
         * Controls whether whitespace is trimmed from the selection.
         */
        trim?: boolean;

        /**
         * Can be set to true or to a regexp matching the characters that make up a word.
         */
        showToken?: boolean | RegExp;

        /**
         * Used to specify how much time to wait, in milliseconds, before highlighting the matches. 
         */
        delay: 100,

        /**
         * If wordsOnly is enabled, the matches will be highlighted only if the selected text is a word.
         */
        wordsOnly?: boolean;
        
        /**
         * If annotateScrollbar is enabled, the occurences will be highlighted on the scrollbar via the matchesonscrollbar addon.
         */
        annotateScrollbar?: boolean;
    }

    interface EditorConfiguration {
        /**
         * Adds a highlightSelectionMatches option that can be enabled to highlight all instances of a currently selected word.
         * When enabled, it causes the current word to be highlighted when nothing is selected (defaults to off).
         */
        highlightSelectionMatches?: HighlightSelectionMatches | boolean;
    }
}
