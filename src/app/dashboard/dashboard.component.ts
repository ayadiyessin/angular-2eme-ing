import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/Services/article.service';
import { EvtService } from 'src/Services/evt.service';
import { MemberService } from 'src/Services/member.service';
import { ChartDataset, ChartOptions } from 'chart.js';
import { Member } from 'src/Modeles/Member';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  nb_teacher:number=0;
  nb_student:number=0;
  nb_Tools:number=0;
  nb_Events!:number;
  nb_Articles!:number;
  nb_member!:number;
  Labeldata:number[]=[];
  Labeldatabar:number[]=[];

  chartData: ChartDataset[] = [
    {
      label: '$ in millions',
      data: this.Labeldata,
    }
  ];
  chartLabels: string[] = [];
  chartOptions: ChartOptions = {};
  // pie
  chartDatapie: ChartDataset[] = [
    {
      label: '',
      data: [], // bech t7ot nomber de teacher et nomber de stoudent
    }
  ];
  chartLabelspie: string[] = ["teacher","student"]; // bech t7ot les mot [teacher , students ]

  chartDatabar: ChartDataset[] = [
    {
      label: '',
      data: this.Labeldatabar, // bech t7ot nomber de teacher et nomber de stoudent
    }
  ];
  chartLabelsbar: string[] = []; // bech t7ot les mot [teacher , students ]
  constructor(private MS:MemberService , private AS :ArticleService , private ES:EvtService ){

  }
  ngOnInit(): void {
    //pie
    this.MS.GetAll().subscribe(res=>{
      console.log(res);
      res.forEach(element =>
        {
          console.log(element.type)
          if(element.type=="teacher") this.nb_teacher++;
          else this.nb_student++;

          if(element.type=="student") {
            this.Labeldatabar.push(element.tab_evt.length)
            this.chartLabelsbar.push(element.name);

          }

        })
        this.chartDatapie = [
          {
            label: '',
            data: [this.nb_teacher , this.nb_student], // bech t7ot nomber de teacher et nomber de stoudent
          }
        ];
        console.log(this.nb_teacher)
        console.log(this.nb_teacher)
    })
    // fin pie
    this.NomLableMmeber();
    this.CountNumber();
    //this.CountTools();
    this.CountEvents();
    this.CountArticles();
    // this.nbArticle();
  }
  CountNumber(){
    this.MS.GetAll().subscribe(member =>{
      this.nb_member = member.length;
    })
  }
  // CountTools(){
  //   this.AS.GetAll().subscribe(artic =>{
  //     this.nb_Articles = artic.length;
  //   })
  // }
  CountEvents(){
    this.ES.GetAll().subscribe(evt =>{
      this.nb_Events = evt.length;
    })
  }
  CountArticles(){
    this.AS.GetAll().subscribe(artic =>{
      this.nb_Articles = artic.length;
    })
    this.nb_Tools=0;
  }
  NomLableMmeber(){
    this.MS.GetAll().subscribe(member =>{
      let i=0;
      member.forEach(element => {
        //this.chartLabels[i]=element.name;
        this.chartLabels.push(element.name);
        this.Labeldata.push(element.tab_pub.length)
        i++;

      });
      console.log(this.chartLabels);
    })
  }
  // nbArticle(){
  //   this.MS.GetAll().subscribe(member =>{
  //     let i=0;
  //     member.forEach(element => {
  //       //this.chartLabels[i]=element.name;
  //       this.chartLabels.push(element.name);
  //       this.Labeldata.push(element.tab_pub.length)

  //       i++;

  //     });
  //     console.log(this.chartLabels);
  //     console.log(this.Labeldata);
  //   })
  // }


}
