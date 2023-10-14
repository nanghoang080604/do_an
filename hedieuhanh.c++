#include<iostream>
using namespace std;
struct QUEUE{
    int a[10];
    int head,tail;
    int k;
};QUEUE Q;
void enqueue(QUEUE &Q,int x)
{
    Q.a[Q.tail]=x;
    //if(Q.tail==Q.k)
        //Q.tail=1;
     Q.tail=Q.tail+1;
}
int Dequeue(QUEUE&Q)
{
    int x;
    x=Q.a[Q.tail];
    Q.tail=Q.tail-1;
    return x;
}
void kt(QUEUE &Q)
{
    Q.head=1;
    Q.tail=1;
    Q.k=10;
}
void Prodecer(QUEUE&Q)
{
    int n;
    cout<<"nhap so luong ptu them vao QUEUE:";
    cin>>n;
    if(n>Q.k-Q.tail+1)
    {
        cout<<"n>Q.k-Q.tail+1 cua QUEUE nen n=Q.n-Qtail+1;"<<endl;
        n=Q.k-Q.tail+1;
    }
    cout<<"moi nhap n ptu chen :";
    for(int i=1;i<=n;i++)
    {
        int a;
        cin>>a;
        enqueue(Q,a);
    }
    Q.tail=Q.tail-1;
}
void comsumer(QUEUE&Q)
{
    int n;
    cout<<"nhap so luong ptu de tieu thu: ";
    cin>>n;
    if(n>Q.tail)
        cout<<"k du so luong de lay ra ";
    else 
    {
        cout<<"cac ptu bi lay ra la: ";
        for(int i=1;i<=n;i++)
            cout<<Dequeue(Q)<<" ";
    }
    cout<<endl;
}
void xuatQ(QUEUE Q)
{
    cout<<"mang doi la: ";
    for(int i=1;i<=Q.tail;i++)
        cout<<Q.a[i]<<" ";
    cout<<endl;
}
int main()
{
    kt(Q);
    xuatQ(Q);
    Prodecer(Q);
    xuatQ(Q);
    comsumer(Q);
    Prodecer(Q);
}