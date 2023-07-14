import React from 'react'
import { CharacterEdge } from "~/types/anilist";
import Link from 'next/link';
import { createCharacterDetailsUrl } from '~/utils/index';
import Image from '../shared/Image';
import { CHARACTERS_ROLES } from '~/constants/index'
import { getHrefByLabel } from '~/utils/index';

interface CharacterCardProps {
    characterEdge: CharacterEdge;
}

const CharacterCard: React.FC<CharacterCardProps> = ({
    characterEdge,
}) => {
    return (
        <Link href={createCharacterDetailsUrl(characterEdge.node)}>
            <div className="text-gray-300 space-x-4 col-span-1 flex w-full h-24 bg-background-900 hover:bg-white/20 transtion duration-300">
                <div className="relative  h-full w-16">
                    <Image
                        src={characterEdge.node.image.medium}
                        alt={characterEdge.node.name.userPreferred}
                        fill
                        style={{ objectFit: "cover" }}
                    />
                </div>
                <div className="">
                    <p>{characterEdge.node.name.userPreferred}</p>
                    <p>{getHrefByLabel(characterEdge.role, CHARACTERS_ROLES)}</p>
                </div>

            </div>
        </Link >

    )
}

export default CharacterCard;