export const Picture = (id) => {
    return `<figure>
        <img src="https://picsum.photos/id/${id}/200/200" alt="Random image">
        <figcaption>Image ${id}</figcaption>
    </figure>`;
};