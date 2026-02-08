const fs = require('fs');
const path = require('path');

const iconsTsPath = 'd:\\Project\\anicon\\app\\_data\\icons.ts';
const registryJsonPath = 'd:\\Project\\anicon\\registry.json';

try {
    const content = fs.readFileSync(iconsTsPath, 'utf8');

    // Extract iconsRegistry array
    const registryMatch = content.match(/export const iconsRegistry = \[(.*?)\] as const;/s);
    if (!registryMatch) {
        console.error("Could not find iconsRegistry in icons.ts");
        process.exit(1);
    }

    const registryContent = registryMatch[1];

    // Find all icon objects
    const items = [];
    const iconBlocks = registryContent.match(/\{[^{}]+\}/g);

    if (iconBlocks) {
        iconBlocks.forEach(block => {
            const nameMatch = block.match(/name:\s*"([^"]+)"/);
            const descMatch = block.match(/description:\s*"([^"]+)"/);

            if (nameMatch && descMatch) {
                const name = nameMatch[1];
                const description = descMatch[1];

                const titleParts = name.replace('icon-', '').split('-');
                const title = 'Animated ' + titleParts.map(p => p.charAt(0).toUpperCase() + p.slice(1)).join(' ');

                items.push({
                    name: name,
                    type: "registry:component",
                    title: title,
                    description: description.trim() + (description.trim().endsWith('.') ? '' : '.'),
                    dependencies: ["motion"],
                    files: [
                        {
                            path: `registry/default/${name}/${name}.tsx`,
                            type: "registry:component"
                        }
                    ]
                });
            }
        });
    }

    // Construct final registry.json
    const registryData = {
        "$schema": "https://ui.shadcn.com/schema/registry.json",
        "name": "anicon",
        "homepage": "https://github.com/gohelboy/anicon",
        "items": items
    };

    fs.writeFileSync(registryJsonPath, JSON.stringify(registryData, null, 2), 'utf8');

    console.log(`Successfully reconstructed registry.json with ${items.length} icons.`);
} catch (err) {
    console.error("Error during reconstruction:", err);
    process.exit(1);
}
