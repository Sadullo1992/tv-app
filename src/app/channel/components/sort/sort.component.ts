import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

import { Channel } from 'src/app/core/models/channel.model';
import { Country, DropdownCategory } from 'src/app/core/models/dropdownData.model';
import * as AppSelects from '../../../redux/selectors/app.selectors';

import counties from '../../../../assets/data/countries.json';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss'],
})
export class SortComponent implements OnInit, OnDestroy {
  availableCounties: Country[] = [];

  dropdownCountries: DropdownCategory[] = [
    {
      name: 'All country',
      value: 'all',
    },
  ];
  dropdownCategories: DropdownCategory[] = [
    {
      name: 'All category',
      value: 'all',
    },
    {
      name: 'News',
      value: 'news',
    },
    {
      name: 'Sports',
      value: 'sports',
    },
    {
      name: 'Music',
      value: 'music',
    },
    {
      name: 'Kids',
      value: 'kids',
    },
    {
      name: 'Series',
      value: 'series',
    },
    {
      name: 'Movies',
      value: 'movies',
    },
  ];

  dropdownSorts: DropdownCategory[] = [
    {
      name: 'Sort by',
      value: 'all',
    },
    {
      name: 'Name',
      value: 'name',
    },
    {
      name: 'Popular',
      value: 'popular',
    },
    {
      name: 'Newest',
      value: 'newest',
    },
  ];

  queryByCountry = 'all';
  queryByCategory = 'all';

  private subscription!: Subscription;

  channels$ = this.store.select(AppSelects.selectChannels);

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.getAllChannels();
  }

  onSortByCountry(value: string): void {
    this.queryByCountry = value;
  }

  onSortByCategory(value: string): void {
    this.queryByCategory = value;
  }

  private getAllChannels(): void {
    this.subscription = this.channels$.subscribe((channels) => this.uploadCountries(channels));
  }

  private uploadCountries(channels: Channel[]): void {
    this.availableCounties = counties.filter((item) =>
      channels.some((channel) => channel.country.includes(item.code))
    );
    this.availableCounties.forEach((item) =>
      this.dropdownCountries.push({ name: item.name, value: item.code })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
