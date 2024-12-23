export const diabeticFootUlcers = [
    {
        id: 1,
        label: "Normal",
        cause: "No visible signs of injuries, infections, or abnormalities.",
        effect: "The foot appears healthy with no immediate health risks.",
        signs: [
            {id: 1, content: "Skin is intact with no signs of redness, swelling, or discoloration."},
            {id: 2, content: "No visible wounds or sores."},
            {id: 3, content: "Normal texture and temperature of the skin."}
        ],
        avoid: [
            {id: 1, content: "Maintain proper hygiene by washing feet daily and drying thoroughly."},
            {id: 2, content: "Avoid walking barefoot to prevent injuries."},
            {id: 3, content: "Check feet regularly for any changes or abnormalities."}
        ],
    },
    {
        id: 2,
        label: "Abnormal",
        cause: "Signs of ulcers, infections, or other abnormalities have been detected.",
        effect: "May lead to complications such as infections, delayed healing, or tissue damage.",
        signs: [
            {id: 1, content: "Presence of open sores, blisters, or wounds."},
            {id: 2, content: "Redness, swelling, or signs of infection around a wound."},
            {id: 3, content: "Skin discoloration or unusual texture, such as hardened or flaky areas."},
            {id: 4, content: "Pain, tenderness, or unusual sensations in the affected area."}
        ],
        avoid: [
            {id: 1, content: "Seek medical attention immediately to address the condition."},
            {id: 2, content: "Avoid applying pressure or walking on the affected area."},
            {id: 3, content: "Keep the wound clean and covered to prevent infection."},
            {id: 4, content: "Do not attempt self-treatment without consulting a healthcare provider."}
        ],
    }
];
