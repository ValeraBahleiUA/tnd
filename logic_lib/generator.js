import pluralize from "pluralize";
export default function generator(word,altword,adj,aadj) {
    //console.log("generator run with" + word)
    if (altword==="") {
        altword="black";
    }
    if (adj==="") {
        altword="filthy";
    }
    if (aadj==="") {
        altword="black";
    }
    const wordP = pluralize.plural(word);
    const altwordP = pluralize.plural(altword);
    //return ("Kill {niggers}. Behead niggers. Roundhouse kick a nigger into the concrete. Slam dunk a nigger baby into
    //  the trashcan. Crucify filthy blacks. Defecate in a niggers food. Launch niggers into the sun. Stir fry niggers i
    //  n a wok. Toss niggers into active volcanoes. Urinate into a niggers gas tank. Judo throw niggers into a wood chippe
    //  r. Twist niggers heads off. Report niggers to the IRS. Karate chop niggers in half. Curb stomp pregnant black niggers.
    //   Trap niggers in quicksand. Crush niggers in the trash compactor. Liquefy niggers in a vat of acid. Eat niggers.
    //   Dissect niggers. Exterminate niggers in the gas chamber. Stomp nigger skulls with steel toed boots. Cremate niggers in the oven. 
    //   Lobotomize niggers. Mandatory abortions for niggers. Grind nigger fetuses in the garbage disposal. Drown niggers in fried chicken grease. 
    //   Vaporize niggers with a ray gun. Kick old niggers down the stairs. Feed niggers to alligators. Slice niggers with");
    return `Kill ${wordP}. Behead ${wordP}. Roundhouse kick a ${word} into the concrete. Slam dunk a ${word} baby into the trashcan. Crucify ${adj} ${altwordP}. Defecate in a ${wordP} food. Launch ${wordP}. Stir fry ${wordP} in a wok. Toss ${wordP} into active volcanoes. Urinate into a ${wordP} gas tank. Judo throw ${wordP} into a wood chipper. Twist ${wordP} heads off. Report ${wordP} to the IRS. Karate chop ${wordP} in half. Curb stomp pregnant ${aadj} ${wordP}. Trap ${wordP} in quicksand. Crush ${wordP} in the trash compactor. Liquefy ${wordP} in a vat of acid. Eat ${wordP}. Dissect ${wordP}. Exterminate ${wordP} in the gas chamber. Stomp ${word} skulls with steel toed boots. Cremate ${wordP} in the oven. Lobotomize ${wordP}. Mandatory abortions for ${wordP}. Grind ${word} fetuses in the garbage disposal. Drown ${wordP} in fried chicken grease. Vaporize ${wordP} with a ray gun. Kick old ${wordP} down the stairs. Feed ${wordP} to alligators. Slice ${wordP} with a katana!`;
};
