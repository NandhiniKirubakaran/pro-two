
import './App.css';

function App() {
const Poster =[
  {
    name : "PS-1",
    pic :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2ylQgIdR3MNcDOubWxBVuT4UPiSyS9STpzA&usqp=CAU",
    para : "Vandiyathevan sets out to cross the Chola land to deliver a message from the crown prince Aditha Karikalan. Meanwhile, Kundavai attempts to establish political peace as vassals and petty chieftains plot against the throne."
  },
  {name : "Vikram",
    pic :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvtD7--0hcO0iJZVU448O_iCWqy5twPt9Mow&usqp=CAU",
    para : "A special agent investigates a murder committed by a masked group of serial killers. However, a tangled maze of clues soon leads him to the drug kingpin of Chennai."
},
{
  name : "Love Today",
  pic :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-9Nh3I1tso4LwefB0I6w0HBrcB7zNUIysGg&usqp=CAU",
  para : "Love Today is a 2022 Indian Tamil-language romantic comedy-drama film written and directed by Pradeep Ranganathan of Comali fame, and produced by Kalapathi S. Aghoram under the banner of AGS Entertainment. The film stars Pradeep Ranganathan himself, Ivana and Raveena Ravi in lead roles."
},
{
  name : "Beast",
  pic :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr9sJJmuKIvEzVXPzKIhYhktMoM5ISH5Px8A&usqp=CAU",
  para : "Former RAW agent Veera must face his fears when a terrorist organisation holds him hostage in a mall along with other visitors and demands the release of their leader, who was captured by Veera."
}];
  return (
    <div className="App">
      {/* <Movieposter name="PS-1"
      pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjYL1Q0OkvyMbbTbS8XeMpndPgHW5aqMxcWQ&usqp=CAU"
      para ="A young student lives with his father and is pampered a lot. He falls in love with the daughter of a strict police officer, but she does not reciprocate his feelings; her father suspects an affair between the two and she is forced to leave town."/> */}
    
    {Poster.map((usr) =>
    (<Movieposter name={usr.name} pic={usr.pic} para={usr.para} />
    ))}
    
    </div>
  );
}

function Movieposter(props){
  const {pic,para,name} = props;
  return (
  <div>
    <img className="user-name"src={pic} alt="{name}"/>
    <h2 className="user-name1">{name}</h2>
<h2 className="user-name2">⭐{9.1}</h2>
<section className='user-name3'>{para}</section>
    </div>
      
    
  );
}
export default App;
