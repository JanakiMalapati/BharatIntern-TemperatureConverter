            function celtofah()
            {
                let c=parseInt(document.getElementById('in').value);
                let o=((c*9)/5)+32;
                document.getElementById('out').value=o;
            }
            function main()
            {
                let f=parseInt(document.getElementById('from').value);
                let t=parseInt(document.getElementById('to').value);
                if(f==1&&t==2)
                {
                    celtofah();
                }
                else if(f==1&&t==3)
                {
                    celtokel();
                }
                else if(f==2&&t==1)
                {
                    fahtocel();
                }
                else if(f==2&&t==3)
                {
                    fahtokel();
                }
                else if(f==3&&t==1)
                {
                    keltocel();
                }
                else if(f==3&&t==2)
                {
                    keltofah();
                }
                else if(f==1&&t==1)
                {
                    celtocel();
                }
                else if(f==2&&t==2)
                {
                    fahtofah();
                }
                else if(f==3&&t==3)
                {
                    keltokel();
                }
            }
            function celtocel()
            {
                let c=parseInt(document.getElementById('in').value);
                document.getElementById('out').value=c;
            }
            function fahtofah()
            {
                let c=parseInt(document.getElementById('in').value);
                document.getElementById('out').value=c;
            }
            function keltokel()
            {
                let c=parseInt(document.getElementById('in').value);
                document.getElementById('out').value=c;
            }
            function celtokel()
            {
                let c=parseInt(document.getElementById('in').value);
                let o=c+273.15;
                document.getElementById('out').value=o;
            }
            function fahtocel()
            {
                let f=parseInt(document.getElementById('in').value);
                let o=((f-32)*5)/9;
                document.getElementById('out').value=o;
            }
            function fahtokel()
            {
                let f=parseInt(document.getElementById('in').value);
                let o=((f-32)*5)/9+273.15;
                document.getElementById('out').value=o;
            }
            function keltocel()
            {
                let k=parseInt(document.getElementById('in').value);
                let o=(k-273.15);
                document.getElementById('out').value=o;
            }
            function keltofah()
            {
                let k=parseInt(document.getElementById('in').value);
                let o=((k-273.15)*9)/5+32;
                document.getElementById('out').value=o;
            }