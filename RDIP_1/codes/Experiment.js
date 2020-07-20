var stemmer = new Snowball('English');
stemmer.setCurrent('abbreviations'); 
stemmer.stem();
console.log(stemmer.getCurrent());  

stop = ["a","the","to","an","i","you","show","me","are","it","so"]
var x=0
corpus=['A mouse was having a very bad time. She could find no food at all. She looked here and there, but there was no food, and she grew very thin. At last the mouse found a basket, full of corn. There was a small hole in the basket, and she crept in. She could just get through the hole. Then she began to eat the corn. Being very hungry, she ate a great deal, and went on eating and eating. She had grown very fat before she felt that she had had enough. When the mouse tried to climb out of the basket, she could not. She was too fat to pass through the hole. "How shall I climb out?" said the mouse. "oh, how shall I climb out?" Just then a rat came along, and he heard the mouse. "Mouse," said the rat, "if you want to climb out of the basket, you must wait till you have grown as thin as you were when you went in.','A wolf carried off a lamb. The lamb said, " I know you are going to eat me, but before you eat me I would like to hear you play the flute. I have heard that you can play the flute better than anyone else, even the shepherd himself." The wolf was so pleased at this that he took out his flute and began to play. When he had done, the lamb insisted him to play once more and the wolf played again. The shepherd and the dogs heard the sound, and they came running up and fell on the wolf and the lamb was able to get back to the flock.','A man had a little dog, and he was very fond of it. He would pat its head, and take it on his knee, and talk to it. Then he would give it little bits of food from his own plate. A donkey looked in at the window and saw the man and the dog. "Why does he not make a pet of me?" said the donkey. "It is not fair. I work hard, and the dog only wags its tail, and barks, and jumps on its master\'s knee. It is not fair." Then the donkey said to himself, "If I do what the dog does, he may make a pet of me." So the donkey ran into the room. It brayed as loudly as it could. It wagged its tail so hard that it knocked over a jar on the table. Then it tried to jump on to its master\'s knee. The master thought the donkey was mad, and he shouted, "Help! Help!" Men came running in with sticks, and they beat the donkey till it ran out of the house, and they drove it back to the field. "I only did what the dog does," said the donkey," and yet they make a pet of the dog, and they beat me with sticks. It is not fair."']

function select()
{
    x=0
    document.getElementById("disp2").style.visibility="hidden"
    document.getElementById("tab1").style.visibility="hidden"
    document.getElementById("but1").style.visibility="hidden"
    document.getElementById("tok1").value=""
    document.getElementById("typ1").value=""
    document.getElementById("tok1").style.backgroundColor=""
    document.getElementById("typ1").style.backgroundColor=""
    document.getElementById("disp3").innerHTML=""
    document.getElementById("but2").style.visibility="hidden"
    document.getElementById("disp4").innerHTML=""
    document.getElementById("but2").innerHTML="Continue"
    document.getElementById("set1").style.backgroundColor=""
    document.getElementById("set1").value=""
    document.getElementById("set1").style.visibility="hidden"
    document.getElementById("disp5").innerHTML=""
    document.getElementById("disp6").innerHTML=""


    if(document.getElementById("corpus1").selected)
    {
        document.getElementById("disp1").innerHTML='A mouse was having a very bad time. She could find no food at all. She looked here and there, but there was no food, and she grew very thin. At last the mouse found a basket, full of corn. There was a small hole in the basket, and she crept in. She could just get through the hole. Then she began to eat the corn. Being very hungry, she ate a great deal, and went on eating and eating. She had grown very fat before she felt that she had had enough. When the mouse tried to climb out of the basket, she could not. She was too fat to pass through the hole. "How shall I climb out?" said the mouse. "oh, how shall I climb out?" Just then a rat came along, and he heard the mouse. "Mouse," said the rat, "if you want to climb out of the basket, you must wait till you have grown as thin as you were when you went in.'
        document.getElementById("disp2").style.visibility="visible"
        document.getElementById("tab1").style.visibility="visible"
        document.getElementById("but1").style.visibility="visible"     
        document.getElementById("set1").style.backgroundColor=""
        document.getElementById("set1").style.visibility="hidden"
    
    }
    else if(document.getElementById("corpus2").selected)
    {
        document.getElementById("disp1").innerHTML='A wolf carried off a lamb. The lamb said, " I know you are going to eat me, but before you eat me I would like to hear you play the flute. I have heard that you can play the flute better than anyone else, even the shepherd himself." The wolf was so pleased at this that he took out his flute and began to play. When he had done, the lamb insisted him to play once more and the wolf played again. The shepherd and the dogs heard the sound, and they came running up and fell on the wolf and the lamb was able to get back to the flock.'
        document.getElementById("disp2").style.visibility="visible"
        document.getElementById("tab1").style.visibility="visible"
        document.getElementById("but1").style.visibility="visible"        
        document.getElementById("set1").style.backgroundColor=""
        document.getElementById("set1").style.visibility="hidden"
    
    }
    else if(document.getElementById("corpus3").selected)
    {
        document.getElementById("disp1").innerHTML='A man had a little dog, and he was very fond of it. He would pat its head, and take it on his knee, and talk to it. Then he would give it little bits of food from his own plate. A donkey looked in at the window and saw the man and the dog. "Why does he not make a pet of me?" said the donkey. "It is not fair. I work hard, and the dog only wags its tail, and barks, and jumps on its master\'s knee. It is not fair." Then the donkey said to himself, "If I do what the dog does, he may make a pet of me." So the donkey ran into the room. It brayed as loudly as it could. It wagged its tail so hard that it knocked over a jar on the table. Then it tried to jump on to its master\'s knee. The master thought the donkey was mad, and he shouted, "Help! Help!" Men came running in with sticks, and they beat the donkey till it ran out of the house, and they drove it back to the field. "I only did what the dog does," said the donkey," and yet they make a pet of the dog, and they beat me with sticks. It is not fair."'
        document.getElementById("disp2").style.visibility="visible"
        document.getElementById("tab1").style.visibility="visible"
        document.getElementById("but1").style.visibility="visible"     
        document.getElementById("set1").style.backgroundColor=""
        document.getElementById("set1").style.visibility="hidden"
    }
    else
    {
        document.getElementById("disp1").innerHTML=""
    }
}
function check_token()
{
    count=0;
    var a=document.getElementById("disp1").innerHTML
    temp=a.split(" ")
    const a1=temp.filter(temp1=> temp1.trim()!=='"');
    for(i=0;i<a1.length;i++)
    {
        count+=1;
    }
    console.log(a1)
    return a1.length
}
function check_type()
{
    count1=0
    var a=document.getElementById("disp1").innerHTML.toLowerCase().replace(/[^\w\s]/gi,"")
    temp=a.split(" ")
    const a1=temp.filter(temp1=> temp1.trim().length>0);
    b=removeDuplicates(a1)
    function removeDuplicates(array)
    {
        m = (array.filter((value,index) => array.indexOf(value) === index).length);
        return m
    };
    console.log(b)
    return b
}
function process()
{
    document.getElementById("but1").style.visibility="hidden"
    document.getElementById("disp4").innerHTML="Now, consider all the tokens with the same 'root' word to be of the same type. Recalculate the number of types."
    document.getElementById("disp3").innerHTML="#newtypes:"+"<br>"+"<input type='text'>"
    document.getElementById("but2").innerHTML="Submit"
}
function stem()
{
    count1 = 0;
    var x = new Array()
    var a=document.getElementById("disp1").innerHTML.toLowerCase().replace(/[^\w\s]/gi,"")
    temp=a.split(" ")
    const a1=temp.filter(temp1=> temp1.trim().length>0);
    b=removeDuplicates(a1)
    function removeDuplicates(array)
    {
        m = (array.filter((value,index) => array.indexOf(value) === index));
        return m
    }
    for(i=0;i<b.length;i++)
    {
        var stemmer = new Snowball('English');
        stemmer.setCurrent(b[i]);
        stemmer.stem();
        x.push(stemmer.getCurrent());            
    }
    console.log(x)
}

document.getElementById("but2").addEventListener("click",process);
document.getElementById("but2").addEventListener("click",stem);
