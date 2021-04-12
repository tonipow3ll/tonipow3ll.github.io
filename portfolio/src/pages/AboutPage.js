import React from 'react';
import Content from '../components/Content';
import Hero from '../components/Hero'

function AboutPage(props) {

    return(
       <div>
           <Hero title={props.title} />
           <Content>
           Bacon ipsum dolor amet drumstick swine boudin, prosciutto alcatra t-bone burgdoggen tail shoulder bacon turkey. Turducken tongue kielbasa porchetta t-bone jowl pork salami boudin corned beef. Chislic turkey doner tri-tip. Meatloaf turkey chuck, sausage cupim beef porchetta flank capicola pork loin jerky boudin chicken tongue tail. Porchetta brisket picanha pork belly short loin, strip steak burgdoggen tri-tip. Alcatra jowl short ribs pastrami, prosciutto ham hock tail porchetta ham burgdoggen chuck sirloin swine pork. Jowl corned beef brisket buffalo, short loin kevin capicola.

Kevin porchetta pork chop, cow drumstick pastrami pig tri-tip kielbasa flank sirloin. Pancetta hamburger jowl pork chop, filet mignon swine ribeye landjaeger kevin short ribs turducken flank sausage shank andouille. Pork swine t-bone venison, ground round turkey beef ribs frankfurter bresaola sirloin jowl leberkas. Chuck capicola ground round, porchetta landjaeger tenderloin meatloaf t-bone ham pancetta tail pastrami.

Turkey cupim shank pork belly porchetta tenderloin strip steak chicken kielbasa. Shankle shank pork chop ribeye alcatra. Porchetta drumstick capicola hamburger pastrami chislic tri-tip sirloin shank pork chop shankle sausage kielbasa beef ribs. Filet mignon pork burgdoggen, leberkas strip steak ground round alcatra meatball sausage shoulder picanha. Pig flank chislic pork chop meatloaf. Fatback t-bone pig shoulder bacon flank salami picanha drumstick.
           </Content>
       </div>
    );
}

export default AboutPage