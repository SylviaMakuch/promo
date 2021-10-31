import React from "react";
import blockingUser from "../../media/moderationIcons/blockingUser.svg"
import approval from "../../media/moderationIcons/approval.svg";
import idVerification from  "../../media/moderationIcons/idVerification.svg";

export const ModerationData = [
    {
        title: "Real ID Verification",
        text: "We verify creators age and identity with a secure real ID process. However, for collectors there is no real ID requirement.",
        image: idVerification,
        backgroundColor: "#FBA7FF"
    },

    {
        title: "NFT Approval Process",
        text: "To make sure the community stays safe and content is acceptable, we have a human + AI moderation process for all creator’s newly minted NFTs.",
        image: approval,
        backgroundColor: "#CC00FF"
    },
    {
        title: "Reporting and Blocking",
        text: "To deal with abuse and harrasement, we give you the tools to limit the levels of interaction you feel comfortable with.",
        image: blockingUser,
        backgroundColor: "#FF51E3"
    },

];
