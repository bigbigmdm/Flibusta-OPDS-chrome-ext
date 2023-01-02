
  styles =`<style>
  h1{text-align:center;}
  img{margin: 10px;}
  .cov{width:100%;}
  .dcov{float:right;width:21%;}
  .fb2on,.epubon,.mobion,.off{
  display:block;
  float:left;
  width:64px;
  height:64px;
  background-position:center;
  background-repeat:no-repeat;
  margin:10px;  
}
  .fb2on{
  background-image: url("data:image/svg+xml,%3Csvg%20width%3D%2262%22%20height%3D%2262%22%20viewBox%3D%220%200%2062%2062%22%20version%3D%221%2E1%22%20xmlns%3D%22http%3A%2F%2Fwww%2Ew3%2Eorg%2F2000%2Fsvg%22%3E%3Cpolyline%20points%3D%2210%2C02%2048%2C02%2054%2C08%2054%2C58%2012%2C58%2012%2C02%2048%2C02%2048%2C08%2054%2C08%22%20stroke%3D%22%23777%22%20fill%3D%22%23ccc%22%20stroke%2Dwidth%3D%221%22%20stroke%2Dlinejoin%3D%22round%22%20stroke%2Dlinecap%3D%22round%22%20%2F%3E%3Crect%20x%3D%221%22%20y%3D%228%22%20rx%3D%222%22%20ry%3D%222%22%20width%3D%2244%22%20height%3D%2214%22%20style%3D%22fill%3A%23f00%3Bstroke%3A%23f00%3Bstroke%2Dwidth%3A1%3Bopacity%3A0%2E9%3B%22%20%2F%3E%3Ctext%20x%3D%223%22%20y%3D%2220%22%20fill%3D%22white%22%3E%3Ctspan%20style%3D%22font%2Dweight%3A%20bold%3B%22%3EFB2%3C%2Ftspan%3E%3C%2Ftext%3E%3C%2Fsvg%3E");
}
  .epubon{
  background-image: url("data:image/svg+xml,%3Csvg%20width%3D%2262%22%20height%3D%2262%22%20viewBox%3D%220%200%2062%2062%22%20version%3D%221%2E1%22%20xmlns%3D%22http%3A%2F%2Fwww%2Ew3%2Eorg%2F2000%2Fsvg%22%3E%3Cpolyline%20points%3D%2210%2C02%2048%2C02%2054%2C08%2054%2C58%2012%2C58%2012%2C02%2048%2C02%2048%2C08%2054%2C08%22%20stroke%3D%22%23777%22%20fill%3D%22%23ccc%22%20stroke%2Dwidth%3D%221%22%20stroke%2Dlinejoin%3D%22round%22%20stroke%2Dlinecap%3D%22round%22%20%2F%3E%3Crect%20x%3D%221%22%20y%3D%228%22%20rx%3D%222%22%20ry%3D%222%22%20width%3D%2244%22%20height%3D%2214%22%20style%3D%22fill%3A%23f00%3Bstroke%3A%23f00%3Bstroke%2Dwidth%3A1%3Bopacity%3A0%2E9%3B%22%20%2F%3E%3Ctext%20x%3D%223%22%20y%3D%2220%22%20fill%3D%22white%22%3E%3Ctspan%20style%3D%22font%2Dweight%3A%20bold%3B%22%3EEPUB%3C%2Ftspan%3E%3C%2Ftext%3E%3C%2Fsvg%3E");
}
  .mobion{
  background-image: url("data:image/svg+xml,%3Csvg%20width%3D%2262%22%20height%3D%2262%22%20viewBox%3D%220%200%2062%2062%22%20version%3D%221%2E1%22%20xmlns%3D%22http%3A%2F%2Fwww%2Ew3%2Eorg%2F2000%2Fsvg%22%3E%3Cpolyline%20points%3D%2210%2C02%2048%2C02%2054%2C08%2054%2C58%2012%2C58%2012%2C02%2048%2C02%2048%2C08%2054%2C08%22%20stroke%3D%22%23777%22%20fill%3D%22%23ccc%22%20stroke%2Dwidth%3D%221%22%20stroke%2Dlinejoin%3D%22round%22%20stroke%2Dlinecap%3D%22round%22%20%2F%3E%3Crect%20x%3D%221%22%20y%3D%228%22%20rx%3D%222%22%20ry%3D%222%22%20width%3D%2244%22%20height%3D%2214%22%20style%3D%22fill%3A%23f00%3Bstroke%3A%23f00%3Bstroke%2Dwidth%3A1%3Bopacity%3A0%2E9%3B%22%20%2F%3E%3Ctext%20x%3D%223%22%20y%3D%2220%22%20fill%3D%22white%22%3E%3Ctspan%20style%3D%22font%2Dweight%3A%20bold%3B%22%3EMOBI%3C%2Ftspan%3E%3C%2Ftext%3E%3C%2Fsvg%3E");
}
  </style>`;
  lastPos = 0;  
  docArr = document.getElementsByTagName('body');
  docTxt = docArr[0].innerHTML;
  startPos = docTxt.indexOf('xmlns="http://www.w3.org/2005/Atom"');
  if(startPos > 1)
  {
    out_txt = '';
    stringToSearch = 'title';
    if (docTxt.indexOf(stringToSearch) > 1)
      {
      startPos = docTxt.indexOf(stringToSearch) - 4;
      endPos = docTxt.indexOf('/title&gt;') + 10;
      h1_tag = docTxt.slice(startPos, endPos);
      h1_tag = h1_tag.replace('title', 'h1');
      docTxt = docTxt.replace('title', 'h1');
      h1_tag = h1_tag.replace('/title', '/h1');
      docTxt = docTxt.replace('/title', '/h1');
      h1_tag = h1_tag.replaceAll('&lt;', '<');
      h1_tag = h1_tag.replaceAll('&gt;', '>');      
      }   
    out_txt = out_txt + h1_tag + '\n<br>\n<ul>\n';
    txt_head = '';
    txt_cont = '';
    txt_link = '';
    txt_entry = new Array();
    txt_covers = '';
    txt_fb2 = '';
    txt_epub = '';
    txt_mobi = '';
    txt_next = '';
    stringToSearchSt= 'rel="next"';
        if (docTxt.indexOf(stringToSearchSt) > 1)
        {
        lastPos = docTxt.indexOf(stringToSearchSt); 
        stringToSearchEn = '"';
        endPos = docTxt.lastIndexOf(stringToSearchEn, lastPos) -1;
        startPos = docTxt.lastIndexOf(stringToSearchEn, endPos) + 1;
        txtFinded = docTxt.slice(startPos, endPos +1);
        txt_next = txtFinded;        
        txt_next = '<br><a style="display:block;text-align:center;" href="' + txt_next + '"> NEXT -> </a>';
        }
    stringToSearchSt = 'entry';
    stringToSearchEn = '/entry';
    while (docTxt.indexOf(stringToSearch, lastPos) > 1)
    {
      //splitting entry tags
      startPos = docTxt.indexOf(stringToSearchSt, lastPos) - 4; //&lt;
      endPos = docTxt.indexOf(stringToSearchEn, lastPos) + stringToSearchSt.length +4;
      lastPos = endPos + 1;
      txt_entry.push(docTxt.slice(startPos, endPos));      
    }
      console.log(txt_entry);
      
      // parsing tags
    txt_entry.forEach(function(item, i) {
      stringToSearchSt = 'title';
      stringToSearchEn = '/title';
      startPos = txt_entry[i].indexOf(stringToSearchSt) + 4 + stringToSearchSt.length; //&lt;
      endPos = txt_entry[i].indexOf(stringToSearchEn) - 4;
      txtFinded = txt_entry[i].slice(startPos, endPos);
      txt_head = txtFinded;
      
      stringToSearchSt = 'content type="text"';
      stringToSearchEn = '/content';      
      if (txt_entry[i].indexOf(stringToSearchSt) > 1)
      {
        startPos = txt_entry[i].indexOf(stringToSearchSt) + 4 + stringToSearchSt.length; //&lt;
        endPos = txt_entry[i].indexOf(stringToSearchEn) - 4;
        txtFinded = txt_entry[i].slice(startPos, endPos);
        txtFinded = txtFinded.replaceAll('&amp;#039;','`');
        txt_cont = txtFinded;
      }
      else
      {
        txt_cont = '';
        //is is a books page
        //parsing annotations
        stringToSearchSt = 'content type="text/html"';
        stringToSearchEn = '/content';
        startPos = txt_entry[i].indexOf(stringToSearchSt) + 4 + stringToSearchSt.length; //&lt;
        endPos = txt_entry[i].indexOf(stringToSearchEn) - 4;
        txtFinded = txt_entry[i].slice(startPos, endPos);
        txtFinded = txtFinded.replaceAll('&amp;','&');
        txtFinded = txtFinded.replaceAll('&lt;','<');
        txtFinded = txtFinded.replaceAll('&gt;','>');
        txtFinded = txtFinded.replaceAll('&quot;','');
        txt_cont = txtFinded;
        //parsing cover images
        stringToSearchSt= 'rel="http://opds-spec.org/image"';
        if (txt_entry[i].indexOf(stringToSearchSt) > 1)
        {
        lastPos = txt_entry[i].indexOf(stringToSearchSt); 
        stringToSearchEn = '"';
        endPos = txt_entry[i].lastIndexOf(stringToSearchEn, lastPos) -1;
        startPos = txt_entry[i].lastIndexOf(stringToSearchEn, endPos) + 1;
        txtFinded = txt_entry[i].slice(startPos, endPos +1);
        txt_covers = txtFinded;        
        }
        else txt_covers = '';
        //parsing download links
        stringToSearchSt= 'type="application/fb2+zip"';
        if (txt_entry[i].indexOf(stringToSearchSt) > 1)
        {
        lastPos = txt_entry[i].indexOf(stringToSearchSt); 
        stringToSearchEn = '"';
        lastPos = txt_entry[i].lastIndexOf(stringToSearchEn, lastPos) -1;
        endPos = txt_entry[i].lastIndexOf(stringToSearchEn, lastPos) -1;
        lastPos = txt_entry[i].lastIndexOf(stringToSearchEn, lastPos) -1;
        endPos = txt_entry[i].lastIndexOf(stringToSearchEn, lastPos) -1;
        startPos = txt_entry[i].lastIndexOf(stringToSearchEn, endPos) + 1;
        txtFinded = txt_entry[i].slice(startPos, endPos +1);
        txt_fb2 = txtFinded;
        txt_fb2 = '<a href="' + txt_fb2 + '"><div class="fb2on"> </div></a>';
        }
        else txt_fb2 = '';
        stringToSearchSt= 'type="application/epub+zip"';
        if (txt_entry[i].indexOf(stringToSearchSt) > 1)
        {
        lastPos = txt_entry[i].indexOf(stringToSearchSt); 
        stringToSearchEn = '"';
        lastPos = txt_entry[i].lastIndexOf(stringToSearchEn, lastPos) -1;
        endPos = txt_entry[i].lastIndexOf(stringToSearchEn, lastPos) -1;
        lastPos = txt_entry[i].lastIndexOf(stringToSearchEn, lastPos) -1;
        endPos = txt_entry[i].lastIndexOf(stringToSearchEn, lastPos) -1;
        startPos = txt_entry[i].lastIndexOf(stringToSearchEn, endPos) + 1;
        txtFinded = txt_entry[i].slice(startPos, endPos +1);
        txt_epub = txtFinded;
        txt_epub = '<a href="' + txt_epub + '"><div class="epubon"> </div></a>';
        }
        else txt_epub = '';
        stringToSearchSt= 'type="application/x-mobipocket-ebook"';
        if (txt_entry[i].indexOf(stringToSearchSt) > 1)
        {
        lastPos = txt_entry[i].indexOf(stringToSearchSt); 
        stringToSearchEn = '"';
        lastPos = txt_entry[i].lastIndexOf(stringToSearchEn, lastPos) -1;
        endPos = txt_entry[i].lastIndexOf(stringToSearchEn, lastPos) -1;
        lastPos = txt_entry[i].lastIndexOf(stringToSearchEn, lastPos) -1;
        endPos = txt_entry[i].lastIndexOf(stringToSearchEn, lastPos) -1;
        startPos = txt_entry[i].lastIndexOf(stringToSearchEn, endPos) + 1;
        txtFinded = txt_entry[i].slice(startPos, endPos +1);
        txt_mobi = txtFinded;
        txt_mobi = '<a href="' + txt_mobi + '"><div class="mobion"> </div></a>';
        }
        else txt_mobi = '';
      }
      //parsing nexp page url        
      stringToSearchSt = 'link href="';
      stringToSearchEn = '" type="application/atom+xml;profile=opds-catalog"';
      startPos = txt_entry[i].indexOf(stringToSearchSt) + stringToSearchSt.length; //&lt;
      endPos = txt_entry[i].indexOf(stringToSearchEn, startPos);
      txtFinded = txt_entry[i].slice(startPos , endPos);
      txt_link = txtFinded;
      
      out_txt = out_txt + '<li><a href="' + txt_link + '">';
      out_txt = out_txt + ' <strong>' + txt_head + '</strong></a> - ';
      if (txt_covers) out_txt = out_txt + ' <div class="dcov">\n<img class="cov" src="' + txt_covers +'" alt="">\n</div>\n';
      out_txt = out_txt + txt_cont + '<div style="clear:both;"></div></li>\n';
      if (txt_fb2) out_txt = out_txt + txt_fb2;
      if (txt_epub) out_txt = out_txt + txt_epub;
      if (txt_mobi) out_txt = out_txt + txt_mobi;
      if ((txt_fb2) || (txt_epub) || (txt_mobi)) out_txt = out_txt + '<div style="clear:both;"></div><br>';
      });             
    out_txt = out_txt + '\n</ul>\n<br>\n';
    //out_txt = out_txt.replaceAll('""','"');
    if (txt_next) out_txt = out_txt + txt_next; 
    docMod = document.getElementsByTagName('body');
    docArr[0].innerHTML = out_txt;
    
    styleMod = document.getElementsByTagName('head');
    styleMod[0].innerHTML = '<meta charset = "utf-8">' + styleMod[0].innerHTML + styles;  
  }
  else
  {
    alert('It is not OPDS cataloque...');
  }
