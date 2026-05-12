import type { CardProps } from "../types/props";
import { Card } from "./Card";

export function List (props: { data: CardProps[]; type: string }) {
    return(
        <section className={props.type} id={props.type}>
          <h2 className="pageTitle">{props.type.charAt(0).toUpperCase() + props.type.slice(1)}</h2>
    
          <div className={`${props.type}Grid`}>
            {props.data.map((item) => (
              <Card key={item.title} {...item} />
            ))}
          </div>
        </section>
      );
}