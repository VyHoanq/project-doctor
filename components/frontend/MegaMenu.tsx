"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

const megaMenu = [
    {
        title: "Top Booked",
        services: [
            {
                title: "Telehealth",
                slug: "tele-health",
                description: "Telehealth"
            },
            {
                title: "Video prescription refill",
                slug: "video-prescription-refill",
                description: "Video prescription refill"
            },
            {
                title: "In-person doctor visit",
                slug: "in-person-doctor-visit",
                description: "In-person doctor visit"
            },
            {
                title: "UTI consult",
                slug: "uti-consult",
                description: "UTI consult"
            },
            {
                title: "ED consult",
                slug: "ed-consult",
                description: "ED consult"
            },
            {
                title: "Mental health consult",
                slug: "mental-health-consult",
                description: "Mental health consult"
            },
            {
                title: "Urgent care visit",
                slug: "urgent-care-visit",
                description: "Urgent care visit"
            },
        ]
    },
    {
        title: "Doctors",
        services: [
            {
                title: "Telehealth",
                slug: "tele-health",
                description: "Telehealth"
            },
            {
                title: "Video prescription refill",
                slug: "video-prescription-refill",
                description: "Video prescription refill"
            },
            {
                title: "In-person doctor visit",
                slug: "in-person-doctor-visit",
                description: "In-person doctor visit"
            },
            {
                title: "UTI consult",
                slug: "uti-consult",
                description: "UTI consult"
            },
            {
                title: "ED consult",
                slug: "ed-consult",
                description: "ED consult"
            },
            {
                title: "Mental health consult",
                slug: "mental-health-consult",
                description: "Mental health consult"
            },
            {
                title: "Urgent care visit",
                slug: "urgent-care-visit",
                description: "Urgent care visit"
            },
        ]
    },
    {
        title: "Specialists",
        services: [
            {
                title: "Telehealth",
                slug: "tele-health",
                description: "Telehealth"
            },
            {
                title: "Video prescription refill",
                slug: "video-prescription-refill",
                description: "Video prescription refill"
            },
            {
                title: "In-person doctor visit",
                slug: "in-person-doctor-visit",
                description: "In-person doctor visit"
            },
            {
                title: "UTI consult",
                slug: "uti-consult",
                description: "UTI consult"
            },
            {
                title: "ED consult",
                slug: "ed-consult",
                description: "ED consult"
            },
            {
                title: "Mental health consult",
                slug: "mental-health-consult",
                description: "Mental health consult"
            },
            {
                title: "Urgent care visit",
                slug: "urgent-care-visit",
                description: "Urgent care visit"
            },
        ]
    },
    {
        title: "Symptoms",
        services: [
            {
                title: "Telehealth",
                slug: "tele-health",
                description: "Telehealth"
            },
            {
                title: "Video prescription refill",
                slug: "video-prescription-refill",
                description: "Video prescription refill"
            },
            {
                title: "In-person doctor visit",
                slug: "in-person-doctor-visit",
                description: "In-person doctor visit"
            },
            {
                title: "UTI consult",
                slug: "uti-consult",
                description: "UTI consult"
            },
            {
                title: "ED consult",
                slug: "ed-consult",
                description: "ED consult"
            },
            {
                title: "Mental health consult",
                slug: "mental-health-consult",
                description: "Mental health consult"
            },
            {
                title: "Urgent care visit",
                slug: "urgent-care-visit",
                description: "Urgent care visit"
            },
        ]
    },

]

export default function MegaMenu() {
    return (
        <NavigationMenu>
            <NavigationMenuList className="space-x-3">
                {
                    megaMenu.map((item, i) => {
                        return (
                            <NavigationMenuItem key={i}>
                                <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                        {item.services.map((component) => (
                                            <ListItem
                                                key={component.title}
                                                title={component.title}
                                                href={`/services${component.slug}`}
                                            >
                                                {component.description}
                                            </ListItem>
                                        ))}
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        )
                    })
                }
            </NavigationMenuList>
        </NavigationMenu>
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"
