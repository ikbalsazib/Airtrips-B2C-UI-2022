import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NgxSpinnerService} from 'ngx-spinner';
import {Blog} from 'src/app/interfaces/blog';
import {BlogService} from '../../services/blog.service';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss']
})
export class BlogDetailsComponent implements OnInit {

  slug: any;
  blog: Blog;

  constructor(
    private activatedRoute: ActivatedRoute,
    private blogService: BlogService,
    private spinner: NgxSpinnerService,
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param) => {
      this.slug = param.get('slug');
      this.getSingleBlogBySlug();
    });
  }

  getSingleBlogBySlug() {
    this.spinner.show();
    this.blogService.getSingleBlogBySlug(this.slug)
      .subscribe(
        (res) => {
          console.log('package --------------====', res.data);
          this.blog = res.data;

        },
        (error) => {
          this.spinner.hide();
          console.log(error);
        }
      )
  }

}
