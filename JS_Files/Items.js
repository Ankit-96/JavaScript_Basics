
    var item_det  = {
        item_name: "",
        item_desc: "",
        item_id: "",
        item_price: ""
    }

    var items=[{item_name:'Shoes',item_desc:'Reebok',item_id:'pd1',item_price:'1200'},
                {item_name:'headset',item_desc:'skullcandy',item_id:'pd2',item_price:'1000'},
                {item_name:'joggings',item_desc:'puma',item_id:'pd3',item_price:'900'},
                {item_name:'tees',item_desc:'adidas',item_id:'pd4',item_price:'700'}];

    var add_Item = function() {
        item_det.item_desc = document.getElementById("p2").value;
        item_det.item_name = document.getElementById("p1").value;
        item_det.item_id = document.getElementById("p3").value;
        item_det.item_price = document.getElementById("p4").value;
        items.push(item_det);
        alert("Added Successfully");
    };

    var remove_Item = function() {
        //item_det.item_id = document.getElementById("p5").value;//item_det.item_id;
        var obj = items.findIndex(function(obj){return obj.item_id === document.getElementById("p5").value;});
        items.splice(obj,1);
        alert('Removed Successfully');
    }