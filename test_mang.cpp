#include<iostream>
using namespace std;
const int N = 1000;
int n,u;
int c[N][N];

void docFile(){
	FILE *f =fopen("tsp_12vertex.txt","r");
	fscanf(f,"%d", &n);
	for(int i=0; i<n; i++){
		for(int j=0; j<n; j++){
			fscanf(f,"%d",&c[i][j]);
		}
	}
	fclose(f);
}

void xuatFile(){
	printf("%d \n", n);
	for(int i=0; i<n; i++){
		for(int j=0; j<n; j++){
			printf("%d ", c[i][j]);
		}
		printf("\n");
	}
}

int main(){
	docFile();
	xuatFile();
}
