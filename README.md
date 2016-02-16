js操作dom对象
DOMDocument 属性和方法

  最近发现DOMDocument对象很重要,还有XMLHTTP也很重要

注意大小写一定不能弄错.

属性:

 1Attributes     存储节点的属性列表(只读)
 2childNodes     存储节点的子节点列表(只读)
 3dataType     返回此节点的数据类型
 4Definition     以DTD或XML模式给出的节点的定义(只读)
 5Doctype     指定文档类型节点(只读)
 6documentElement     返回文档的根元素(可读写)
 7firstChild     返回当前节点的第一个子节点(只读)
 8Implementation     返回XMLDOMImplementation对象
 9lastChild     返回当前节点最后一个子节点(只读)
10nextSibling     返回当前节点的下一个兄弟节点(只读)
11nodeName     返回节点的名字(只读)
12nodeType     返回节点的类型(只读)
13nodeTypedValue     存储节点值(可读写)
14nodeValue     返回节点的文本(可读写)
15ownerDocument     返回包含此节点的根文档(只读)
16parentNode     返回父节点(只读)
17Parsed     返回此节点及其子节点是否已经被解析(只读)
18Prefix     返回名称空间前缀(只读)
19preserveWhiteSpace     指定是否保留空白(可读写)
20previousSibling     返回此节点的前一个兄弟节点(只读)
21Text     返回此节点及其后代的文本内容(可读写)
22url     返回最近载入的XML文档的URL(只读)
23Xml     返回节点及其后代的XML表示(只读)

方法:

 1appendChild     为当前节点添加一个新的子节点,放在最后的子节点后
 2cloneNode     返回当前节点的拷贝
 3createAttribute     创建新的属性
 4createCDATASection     创建包括给定数据的CDATA段
 5createComment     创建一个注释节点
 6createDocumentFragment     创建DocumentFragment对象
 7createElement     创建一个元素节点
 8createEntityReference     创建EntityReference对象
 9createNode     创建给定类型,名字和命名空间的节点
10createPorcessingInstruction     创建操作指令节点
11createTextNode     创建包括给定数据的文本节点
12getElementsByTagName     返回指定名字的元素集合
13hasChildNodes     返回当前节点是否有子节点
14insertBefore     在指定节点前插入子节点
15Load     导入指定位置的XML文档
16loadXML     导入指定字符串的XML文档
17removeChild     从子结点列表中删除指定的子节点
18replaceChild     从子节点列表中替换指定的子节点
19Save     把XML文件存到指定节点
20selectNodes     对节点进行指定的匹配,并返回匹配节点列表
21selectSingleNode     对节点进行指定的匹配,并返回第一个匹配节点
22transformNode     使用指定的样式表对节点及其后代进行转换
23transformNodeToObject     使用指定的样式表将节点及其后代转换为对象


*************************************************************************************************************************

DOM(文档对象模型)
DOM(文档对象模型)概念的推出,这个API使HTML如虎添翼,但是有些学DHTML的朋友还是有些困挠,只是因为目前的手册的书写不太科学,是按字母

来分的,不便查阅.其实DOM中最关键是要掌握节点与节点之间的关系(between node andnode),想学习DHTML中的DOM千万不要从头到尾地看遍所

有的属性和方法,你有三国时张松的"过目不忘"的本领吗?没有吧,那就听我分析一下：

其实DOM教给我们的就是一个层次结构，你可以理解为一个树形结构，就像我们的目录一样，一个根目录，根目录下有子目录，子目录下还有子

目录……

根节点：


DOM把层次中的每一个对象都称之为节点（NODE），以HTML超文本标记语言为例：整个文档的一个根就是<html>,在DOM中可以使用

document.documentElement来访问它，它就是整个节点树的根节点（ROOT）

子节点：

一般意义上的节点，根节点以下最大子节点就是主文档区<body>了，要访问到body标签，在脚本中应该写：
document.body
body区以内所有的文本及HTML标签都是文档的节点，分别称为文本节点、元素节点（或者叫标签节点），大家知道HTML说到底只是文本而矣，

不论怎么样的网页必然由这两个节点组成，也只能由这两个节点组成

节点之间的关系：

节点之间的关系也是DOM中最重要的一个关节，如何正确地引用到节点对象，一定要清楚节点树各个节点的相互描述方式，在DHTML里，

Javascript脚本就用了各个节点对象的一整套方法和属性去描述另外的节点对象。


节点的绝对引用：
返回文档的根节点
document.documentElement
返回当前文档中被击活的标签节点
document.activeElement
返回鼠标移出的源节点
event.fromElement
返回鼠标移入的源节点
event.toElement
返回激活事件的源节点
event.srcElement

节点的相对引用：(设当前对节点为node)
返回父节点
node.parentNode
node.parentElement
返回子节点集合（包含文本节点及标签节点）
node.childNodes
返回子标签节点集合
node.children
返回子文本节点集合
node.textNodes
返回第一个子节点
node.firstChild
返回最后一个子节点
node.lastChild
返回同属下一个节点
node.nextSibling
返回同属上一个节点
node.previousSibling

节点的各种操作：(设当前的节点为node)

新增标签节点句柄：
document.createElement(sNode) //参数为要新添的节点标签名，例：newnode=document.createElement("div");

1、添加节点：
追加子节点：
node.appendChild(oNode) //oNode为生新增的节点句柄,例：node.appendChild(newnode)
应用标签节点
node.applyElment(oNode,sWhere)//oNode为生新增的节点句柄,sWhere有两个值：outside / inside，加在当前节点外面还是里面
插入节点
inode.insertBefore()
node.insertAdjacentElement()
node.replaceAdjacentText()

2、修改节点：

删除节点
node.remove()
node.removeChild()
node.removeNode()

替换节点
node.replaceChild()
node.replaceNode()
node.swapNode()


2、复制节点：
返回复制复制节点引用
node.cloneNode(bAll)//bAll为布尔值，true / false 是否克隆该节点所有子节点

3、节点信息
是否包含某节点
node.contains()
是否有子节点
node.hasChildNodes()

************************************************************************************************************************

下面为javascript操作xml
<script language="JavaScript">
<!--
var doc = new ActiveXObject("Msxml2.DOMDocument"); //ie5.5+,CreateObject("Microsoft.XMLDOM")


//加载文档
//doc.load("b.xml");

//创建文件头
var p = doc.createProcessingInstruction("xml","version='1.0'  encoding='gb2312'");

    //添加文件头
    doc.appendChild(p);

//用于直接加载时获得根接点
//var root = doc.documentElement;

//两种方式创建根接点
//    var root = doc.createElement("students");
    var root = doc.createNode(1,"students","");

    //创建子接点
    var n = doc.createNode(1,"ttyp","");

        //指定子接点文本
        //n.text = " this is a test";
    
    //创建孙接点
    var o = doc.createElement("sex");
        o.text = "男";    //指定其文本

    //创建属性
    var r = doc.createAttribute("id");
        r.value="test";

        //添加属性
        n.setAttributeNode(r);

    //创建第二个属性    
    var r1 = doc.createAttribute("class");
        r1.value="tt";
        
        //添加属性
        n.setAttributeNode(r1);

        //删除第二个属性
        n.removeAttribute("class");

        //添加孙接点
        n.appendChild(o);

        //添加文本接点
        n.appendChild(doc.createTextNode("this is a text node."));

        //添加注释
        n.appendChild(doc.createComment("this is a comment\n"));
    
        //添加子接点
        root.appendChild(n);
    
    //复制接点
    var m = n.cloneNode(true);

        root.appendChild(m);
        
        //删除接点
        root.removeChild(root.childNodes(0));

    //创建数据段
    var c = doc.createCDATASection("this is a cdata");
        c.text = "hi,cdata";
        //添加数据段
        root.appendChild(c);
    
    //添加根接点
    doc.appendChild(root);

    //查找接点
    var a = doc.getElementsByTagName("ttyp");
    //var a = doc.selectNodes("//ttyp");

    //显示改接点的属性
    for(var i= 0;i<a.length;i++)
      {
          alert(a[i].xml);
          for(var j=0;j<a[i].attributes.length;j++)
          {
              alert(a[i].attributes[j].name);
          }
      }

    //修改节点,利用XPATH定位节点
    var b = doc.selectSingleNode("//ttyp/sex");
    b.text = "女";

    //alert(doc.xml);

    //XML保存（需要在服务端，客户端用FSO）
    //doc.save();
    
    //查看根接点XML
    if(n)
      {
          alert(n.ownerDocument.xml);
      }

//-->
</script> 
