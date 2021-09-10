/// <reference path="fourslash.ts" />

////abstract class Base {
////    abstract foo(param1: string, param2: boolean): Promise<void>;
////}
////
////class Sub extends Base {
////    f/*a*/    
////}


verify.completions({
    marker: "a",
    isNewIdentifierLocation: true,
    includes: [
        {
            name: "E",
            isRecommended: true,
            sortText: completion.SortText.LocationPriority,
        }
    ],
});
