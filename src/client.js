// This is it, connecting sanity to react
import { createClient } from '@sanity/client';
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
    projectId: "7tok3wtv",
    dataset: 'production',
    apiVersion: '2023-10-01',
    useCdn: true,
    token: "sk40XjbkQOgVzqsP975QSZiriLISqsbieEuDiaS8viV1ESm6LI5ZAOLMvAS5hZcYxXbAoYcBso2pWAfFiNRMZxPsMiXiYvr4YQEQALUdJPwT2r9xCSnPHsA6smD3olOppaTxo0TgbgJs4WUMDpfRq9qvPsp72XDJH8HjfsQMMSIiMeJUGKBw",
})

const builder = imageUrlBuilder(client);

// Function to generate the image URL from the source
export const urlFor = (source) => builder.image(source);