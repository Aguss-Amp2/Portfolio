import { PROJECTS } from "../Project.ts";

export const ProjectList = () => {
    {
        PROJECTS.map(({ title, description, link, github, image, tags }) => (
            <article class="mt-8">
                <h3 class="text-2xl font-semibold text-blue-400 mb-2">{title}</h3>
                <p class="text-lg mb-4 text-pretty">{description}</p>
                
                <ul class="flex flex-wrap gap-x-2 flex-row">
                    {tags.map((tag) => (
                        <li class="flex">
                            {(tag.name === "GitHub" || tag.name === "Demo") ? (
                                <a
                                    href={tag.name === "GitHub" ? github : link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class={`flex gap-x-2 text-xs rounded-full items-center ${tag.class} my-2 py-2 px-2 hover:scale-105 transition-transform`}
                                >
                                    <tag.icon class="size-6" />
                                    {tag.name}
                                </a>
                            ) : (
                                <span
                                    class={`flex gap-x-2 text-xs rounded-full items-center ${tag.class} my-2 py-2 px-2`}
                                >
                                    <tag.icon class="size-6" />
                                    {tag.name}
                                </span>
                            )}
                        </li>
                    ))}
                </ul>
                <img
                    class="rounded shadow-2xl hover:scale-102 transition-transform shadow-white/10"
                    src={image}
                    alt={`Captura del Proyecto ${image}`}
                />
            </article>
        ))
    }
}
