import Accordion from "../components/Accordion";

const AccordionPage = () => {
    const items = [
        {
            id:1,
            label: `The Philosopher's Stone (Sorcerer's Stone)`,
            content:`The revelation of the Philosopher's Stone and its protection by various enchantments. Professor Quirrell's betrayal and Voldemort's return.`
        },
        {
            id:2,
            label:`The Chamber of Secrets`,
            content:`The discovery of Tom Riddle's diary and its connection to the Basilisk. Dobby's sacrifice to save Harry.`
        },
        {
            id:3,
            label:`The Prisoner of Azkaban`,
            content:`The revelation of Sirius Black's innocence and betrayal by Peter Pettigrew. The time-turner twist, revealing the events that unfolded during the movie.`
        },
        {
            id:4,
            label:`The Goblet of Fire`,
            content:`Harry being unexpectedly entered into the Triwizard Tournament. The return of Lord Voldemort to power.`
        },
        {
            id:5,
            label:`The Order of the Phoenix`,
            content:`The tragic death of Sirius Black in the Battle of the Department of Mysteries. The prophecy about Harry and Voldemort's connection.`
        },
        {
            id:6,
            label:`The Half-Blood Prince`,
            content:`Dumbledore's demise at the hands of Snape. The discovery of Voldemort's Horcruxes.`
        },
        {
            id:7,
            label:`The Deathly Hallows`,
            content:`The three Deathly Hallows and their significance. Snape's true allegiance and his love for Lily Potter. The Battle of Hogwarts and the casualties, including Fred Weasley and Remus Lupin.`
        },
    ]
    return <Accordion items={items} />
};

export default AccordionPage;