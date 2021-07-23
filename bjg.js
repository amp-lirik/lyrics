//<![CDATA[
var rts=new Array();
var rtsNum=0;
var rtdUrls=new Array();
function rrl(json)
{
for(var i=0;i<json.feed.entry.length;i++)
{
var entry=json.feed.entry[i];rts[rtsNum]=entry.title.$t;for(var k=0;k<entry.link.length;k++)
{
if(entry.link[k].rel=='alternate')
{
rtdUrls[rtsNum]=entry.link[k].href;rtsNum++;break
}
}
}
}

function rmv()
{
var tmp=new Array(0);
var tmp2=new Array(0);
for(var i=0;i<rtdUrls.length;i++)
{
if(!ctn(tmp,rtdUrls[i]))
{
tmp.length+=1;tmp[tmp.length-1]=rtdUrls[i];tmp2.length+=1;tmp2[tmp2.length-1]=rts[i]
}
}
rts=tmp2;
rtdUrls=tmp
}

function ctn(a,e)
{
for(var j=0;j<a.length;j++)
{
if(a[j]==e)
{
return true
}
};
return false
}

function prt(crl)
{
for(var i=0;i<rtdUrls.length;i++)
{
if(rtdUrls[i]==crl)
{
rtdUrls.splice(i,1);
rts.splice(i,1)
}
}

var r=Math.floor((rts.length-1)*Math.random());

var i=0;if(rts.length>1)
{
document.write('<p>'+rtl+'</p>')
}
document.write('<ul>');
while(i<rts.length&&i<1000&&i<mx)
{
document.write('<li><span>'+i+'.</span><a href="'+rtdUrls[r]+'"> '+rts[r]+'</a></li>');
if(r<rts.length-1){r++}
else
{r=0}
i++
}
document.write('</ul>');
rtdUrls.splice(0,rtdUrls.length);
rts.splice(0,rts.length);
}
//]]>
