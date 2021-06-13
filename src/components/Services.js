import React, { Component } from 'react';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';
import Title from "./Title";

export default class Services extends Component {

    state={
        services:[
            {
                icon:<FaCocktail />,
                title:"Free Cocktail",
                info:"A cocktail is a term relating to any type of alcoholic mixed drink. Most commonly, cocktails are either a combination of spirits, or one or more spirits mixed with other. "
            },
            {
                icon:<FaHiking />,
                title:"Endless Hiking",
                info:"Hiking is a long, vigorous walk, usually on trails or footpaths in the countryside. Walking for pleasure developed in Europe during the eighteenth century."
            },
            {
                icon:<FaShuttleVan />,
                title:"Free Shuttle",
                info:"Need private shuttle van or shuttle bus transportation? Metropolitan Shuttle can provide you with a shuttle service for your needs. Visit us today!"
            },
            {
                icon:<FaBeer />,
                title:"Strongest Beer",
                info:"Beer is one of the oldest and most widely consumed alcoholic drinks in the world, and the third most popular drink overall after water and tea."
            }
        ]
    }

    render() {
        return (
            <section className="services">
                <Title title="services" />
                <div className="services-center">
                    {this.state.services.map((item,index) => {
                        return (
                            <article key={index} className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>
                        );
                    })}
                </div>
            </section>
        )
    }
}
